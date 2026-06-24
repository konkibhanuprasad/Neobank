-- ─────────────────────────────────────────────────────
-- 07_create_loan_products_table.sql
-- ─────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS loan_products (
    id                      BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_name            VARCHAR(100) NOT NULL UNIQUE,
    description             VARCHAR(500),
    loan_type               ENUM('HOME','PERSONAL','VEHICLE','EDUCATION')
                                NOT NULL,
    min_amount              DECIMAL(15,2) NOT NULL,
    max_amount              DECIMAL(15,2) NOT NULL,
    annual_interest_rate    DECIMAL(5,2)  NOT NULL,
    allowed_tenures         VARCHAR(200)  NOT NULL,
    income_proof_required   TINYINT(1)    DEFAULT 1,
    address_proof_required  TINYINT(1)    DEFAULT 0,
    property_doc_required   TINYINT(1)    DEFAULT 0,
    vehicle_doc_required    TINYINT(1)    DEFAULT 0,
    bank_statement_required TINYINT(1)    DEFAULT 0,
    is_active               TINYINT(1)    DEFAULT 1,
    created_by              VARCHAR(100),
    created_at              TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    updated_at              TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
                                ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_lp_active (is_active),
    INDEX idx_lp_type   (loan_type)
);

-- ─────────────────────────────────────────────────────
-- 08_add_product_id_to_loans.sql
-- ─────────────────────────────────────────────────────

ALTER TABLE loans
    ADD COLUMN loan_product_id BIGINT NULL,
    ADD CONSTRAINT fk_loan_product
        FOREIGN KEY (loan_product_id)
        REFERENCES loan_products(id)
        ON DELETE SET NULL;

-- ─────────────────────────────────────────────────────
-- 09_seed_loan_products.sql
-- ─────────────────────────────────────────────────────

INSERT INTO loan_products (
    product_name, description, loan_type,
    min_amount, max_amount, annual_interest_rate,
    allowed_tenures,
    income_proof_required, address_proof_required,
    property_doc_required, vehicle_doc_required,
    bank_statement_required, is_active, created_by
) VALUES

-- 1. Personal Loan
(
    'NeoBank Personal Loan',
    'Quick unsecured personal loan for any need. No collateral required.',
    'PERSONAL',
    10000.00, 5000000.00, 13.50,
    '12,24,36,48,60,84',
    1, 0, 0, 0, 0, 1, 'SYSTEM'
),

-- 2. Home Loan
(
    'NeoBank Home Loan',
    'Low-interest home loan for purchase, construction, or renovation.',
    'HOME',
    500000.00, 50000000.00, 8.50,
    '60,84,120,180,240,300,360',
    1, 1, 1, 0, 1, 1, 'SYSTEM'
),

-- 3. Vehicle Loan — 4-Wheeler
(
    'NeoBank Car Loan',
    'Finance your dream car with competitive rates and flexible tenure.',
    'VEHICLE',
    100000.00, 5000000.00, 9.75,
    '12,24,36,48,60,72,84',
    1, 0, 0, 1, 0, 1, 'SYSTEM'
),

-- 4. Vehicle Loan — 2-Wheeler
(
    'NeoBank Two-Wheeler Loan',
    'Easy financing for motorcycles and scooters.',
    'VEHICLE',
    10000.00, 150000.00, 11.50,
    '12,24,36',
    1, 0, 0, 1, 0, 1, 'SYSTEM'
),

-- 5. Education Loan
(
    'NeoBank Education Loan',
    'Invest in your future. Covers tuition, hostel, and related expenses.',
    'EDUCATION',
    50000.00, 7500000.00, 9.00,
    '12,24,36,60,84,120,180',
    1, 0, 0, 0, 1, 1, 'SYSTEM'
);

-- ─────────────────────────────────────────────────────
-- 10_seed_loan_applications.sql
-- (Run AFTER user + account seed data exists)
-- ─────────────────────────────────────────────────────

-- NOTE: Adjust user_id and account_id to match your seed data
-- customer1 = user_id=2, account_id=1
-- customer2 = user_id=3, account_id=3
-- customer3 = user_id=4, account_id=5

-- Application 1: PENDING (customer1 — Personal Loan)
INSERT INTO loans (
    loan_id, user_id, account_id, loan_product_id, loan_type,
    principal_amount, tenure_months, purpose,
    status, outstanding_balance,
    emis_paid, emis_overdue, foreclosure_requested,
    created_at
) VALUES (
    'LN20260000001', 2, 1, 1, 'PERSONAL',
    250000.00, 36, 'Home renovation and furniture purchase',
    'PENDING', 250000.00,
    0, 0, 0,
    NOW() - INTERVAL 2 DAY
);

-- Application 2: PENDING (customer2 — Car Loan)
INSERT INTO loans (
    loan_id, user_id, account_id, loan_product_id, loan_type,
    principal_amount, tenure_months, purpose,
    status, outstanding_balance,
    emis_paid, emis_overdue, foreclosure_requested,
    created_at
) VALUES (
    'LN20260000002', 3, 3, 3, 'VEHICLE',
    800000.00, 60, 'Purchase of new Maruti Swift',
    'PENDING', 800000.00,
    0, 0, 0,
    NOW() - INTERVAL 1 DAY
);

-- Application 3: REJECTED (customer3 — Home Loan)
INSERT INTO loans (
    loan_id, user_id, account_id, loan_product_id, loan_type,
    principal_amount, tenure_months, purpose,
    status, outstanding_balance,
    rejection_reason, reviewed_by, reviewed_at,
    emis_paid, emis_overdue, foreclosure_requested,
    created_at
) VALUES (
    'LN20260000003', 4, 5, 2, 'HOME',
    3000000.00, 180, 'Purchase of 2BHK apartment in Bhubaneswar',
    'REJECTED', 3000000.00,
    'Income documents insufficient. Monthly income does not support requested EMI.',
    'admin@neobank.in',
    NOW() - INTERVAL 3 DAY,
    0, 0, 0,
    NOW() - INTERVAL 5 DAY
);

-- Application 4: APPROVED (customer1 — Education Loan)
-- This one has EMI schedule
INSERT INTO loans (
    loan_id, user_id, account_id, loan_product_id, loan_type,
    principal_amount, interest_rate, tenure_months, purpose,
    emi_amount, total_interest, total_payable,
    outstanding_balance,
    status, disbursement_date, next_emi_date, maturity_date,
    reviewed_by, reviewed_at,
    emis_paid, emis_overdue, foreclosure_requested,
    created_at
) VALUES (
    'LN20260000004', 2, 1, 5, 'EDUCATION',
    500000.00, 9.00, 24, 'MBA programme at IIM Bangalore',
    23017.00, 52408.00, 552408.00,
    476983.00,
    'APPROVED',
    CURDATE() - INTERVAL 1 MONTH,
    CURDATE() + INTERVAL 1 MONTH - INTERVAL 1 DAY,
    CURDATE() + INTERVAL 23 MONTH,
    'admin@neobank.in',
    NOW() - INTERVAL 1 MONTH,
    1, 0, 0,
    NOW() - INTERVAL 1 MONTH - INTERVAL 2 DAY
);

-- EMI Schedule for LN20260000004 (24 months, ₹23017/month)
-- First EMI already PAID, rest PENDING
SET @loan_id = LAST_INSERT_ID();
SET @base_date = CURDATE() - INTERVAL 1 MONTH;
SET @outstanding = 500000.00;
SET @monthly_rate = 9.00 / 100 / 12;

-- EMI 1: PAID
INSERT INTO loan_emis (
    loan_id, emi_number, due_date, emi_amount,
    principal_component, interest_component, outstanding_after,
    status, paid_at, paid_amount
) VALUES (
    @loan_id, 1,
    @base_date,
    23017.00,
    19267.00, 3750.00, 480733.00,
    'PAID',
    @base_date + INTERVAL 1 DAY,
    23017.00
);

-- EMI 2–5: PENDING (due in future)
INSERT INTO loan_emis (
    loan_id, emi_number, due_date, emi_amount,
    principal_component, interest_component, outstanding_after,
    status
) VALUES
(
    @loan_id, 2,
    @base_date + INTERVAL 1 MONTH,
    23017.00, 19411.00, 3606.00, 461322.00, 'PENDING'
),
(
    @loan_id, 3,
    @base_date + INTERVAL 2 MONTH,
    23017.00, 19557.00, 3460.00, 441765.00, 'PENDING'
),
(
    @loan_id, 4,
    @base_date + INTERVAL 3 MONTH,
    23017.00, 19704.00, 3313.00, 422061.00, 'PENDING'
),
(
    @loan_id, 5,
    @base_date + INTERVAL 4 MONTH,
    23017.00, 19852.00, 3165.00, 402209.00, 'PENDING'
);

-- Insert remaining EMIs 6–24 as PENDING
-- (simplified — amounts approximate)
INSERT INTO loan_emis (
    loan_id, emi_number, due_date, emi_amount,
    principal_component, interest_component, outstanding_after,
    status
)
SELECT
    @loan_id,
    (@n := @n + 1),
    @base_date + INTERVAL @n MONTH,
    23017.00,
    ROUND(23017.00 - (402209.00 * @monthly_rate
          * POW(1 + @monthly_rate, 24 - @n)
          / (POW(1 + @monthly_rate, 24 - @n) - 1)), 2),
    ROUND(402209.00 * @monthly_rate
          * POW(1 + @monthly_rate, 24 - @n)
          / (POW(1 + @monthly_rate, 24 - @n) - 1), 2),
    GREATEST(0, ROUND(402209.00
          * POW(1 + @monthly_rate, 24 - @n)
          / (POW(1 + @monthly_rate, 24 - @n + 1) - 1), 2)),
    'PENDING'
FROM
    (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION
     SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION
     SELECT 9 UNION SELECT 10 UNION SELECT 11 UNION SELECT 12 UNION
     SELECT 13 UNION SELECT 14 UNION SELECT 15 UNION SELECT 16 UNION
     SELECT 17 UNION SELECT 18 UNION SELECT 19) AS nums,
    (SELECT @n := 5) AS init;