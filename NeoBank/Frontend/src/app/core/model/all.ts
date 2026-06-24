export interface ApiResponse<T> {
  timestamp: string;
  status: number;
  success: boolean;
  message: string;
  errorCode?: string;
  data: T;
}

export interface RegisterRequest {
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
}

export interface VerifyEmailRequest {
  email: string;
  otp: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface VerifyLoginRequest {
  userId: number;
  otp: string;
}

export interface UserDto {
  id: number;
  email: string;
  phone: string;
  emailVerified: boolean;
  status: string;
  roleName: string;
  kycStatus: string;
  accountNumber: string;
  token?: string;
}

export interface LoginResponse {
  userId: number;
  email: string;
  roleName: string;
  token?: string;
}

export interface KycRequest {
  userId: number;
  fullName: string;
  fatherName: string;
  motherName: string;
  maritalStatus: string;
  occupation: string;
  annualIncome: string;
  aadhaarNumber: string;
  panNumber: string;
  addressProofType: string;
  nomineeName: string;
  nomineeRelation: string;
  nomineePhone: string;
  accountType: string;
  // Indicates whether the document uploads have been applied in this submission
  documentUploaded?: boolean;
  aadhaarFile?: File | null;
  panFile?: File | null;
  addressProofFile?: File | null;
  photoFile?: File | null;
}

export interface KycDto {
  id: number;
  userId: number;
  fullName: string;
  fatherName: string;
  motherName: string;
  maritalStatus: string;
  occupation: string;
  annualIncome: number;
  aadhaarNumber: string;
  panNumber: string;
  addressProofType: string;
  nomineeName: string;
  nomineeRelation: string;
  nomineeDob: string;
  nomineePhone: string;
  verificationStatus: string;
  remarks: string;
  createdAt: string;
  documentUploaded?: boolean;
}

export interface AccountDto {
  id: number;
  accountNumber: string;
  accountType: string;
  balance: number;
  currency: string;
  status: string;
  ifscCode: string;
  branchName: string;
  createdAt: string;
  userId: number;
  userEmail: string;
}

export interface TransactionDto {
  id: number;
  senderAccountId: number;
  senderAccountNumber: string;
  receiverAccountId: number;
  receiverAccountNumber: string;
  amount: number;
  transactionType: string;
  transactionStatus: string;
  referenceId: string;
  description: string;
  transactionDate: string;
}

export interface TransactionRequest {
  senderAccountId: number;
  receiverAccountId: number;
  amount: number;
  transactionType: string;
  description?: string;
}

export interface TrendEntry {
  year: number;
  month: number;
  income: number;
  expense: number;
}


export interface FinancialInsights {
  totalBalance: number;
  monthlyIncome: number;

  totalIncome: number;
  totalExpense: number;
  savings: number;

  trendSummary: TrendEntry[];

  categoryBreakdown: {
    category: string;
    amount: number;
  }[];

  budgetComparison: {
    category: string;
    spent: number;
    budget: number;
  }[];

  netWorthHistory: {
    month: string;
    netWorth: number;
  }[];

  rewardHistory: {
    month: string;
    points: number;
  }[];

  loanPayoffForecast: LoanPayoffForecast[];
}



export interface AdminDashboard {
  totalUsers: number;
  totalActiveUsers: number;
  totalLoans: number;
  pendingApprovals: number;
  totalTransactions: number;
  platformSavingsRate: number;
}

export interface PendingApproval {
  id: number;
  type: string;
  applicantName: string;
  productName: string;
  requestedAmount: number;
  appliedAt: string;
}

export interface SystemHealth {
  dbStatus: string;
  activeSessions: number;
  serverUptimeSeconds: number;
}


export interface DailyTransactionVolume {
  date: string;
  inflow: number;
  outflow: number;
}

export interface AdminTransactionAnalyticsResponse {
  dailyVolumes: DailyTransactionVolume[];
  averageTicketSize: number;
  totalInflow: number;
  totalOutflow: number;
}

export interface AdminLoanAnalyticsResponse {
  loanDistributionByStatus: Record<string, number>;
  loanDistributionByProduct: Record<string, number>;
  totalLoans: number;
  npaCount: number;
  npaRatio: number;
}

export interface CategorySpending {
  month: string;
  category: string;
  amount: number;
}

export interface SpendingAnalyticsResponse {
  userId: number;
  months: number;
  categorySpending: CategorySpending[];
}

export interface NetWorthPoint {
  month: string;
  totalBalance: number;
  outstandingPrincipal: number;
  netWorth: number;
}

export interface LoanPayoffForecast {
  loanId: number;
  outstandingPrincipal: number;
  monthsRemaining: number;
  projectedPayoffDate: string;
}

export interface RewardPointHistory {
  month: string;
  points: number;
}

export interface WealthAnalyticsResponse {
  userId: number;
  netWorthTimeline: NetWorthPoint[];
  loanPayoffForecast: LoanPayoffForecast[];
  rewardAccrualHistory: RewardPointHistory[];
}

export interface SystemAuditLog {
  id: number;
  endpoint: string;
  httpMethod: string;
  responseStatus: number;
  executionTimeMs: number;
  actingUserId: number;
  eventTimestamp: string;
  errorMessage: string;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  outflow: number;
  transactionCount: number;
}




// Re-export Bank Account Opening models for broader use
export * from './bank-account-opening.model';