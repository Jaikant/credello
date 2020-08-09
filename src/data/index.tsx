export const dcprData = {
  signature: {
    ip: {
      consolidated_loan_info: {
        total_debt_amount: 10000,
        combined_interest_rate: 21.54,
        total_monthly_payment: '1300',
        remaining_term: 31,
      },
      credit_score: 'excellent/good/average/below/poor',
      most_preferred:
        'reduce_monthly_payment/reduce_total_interest/payoff_faster)',
      location: 'Texas',
      base_match_score: {
        pl: 3, // Match score for product
        hel: 2,
      },
    },

    op: {
      pl: {
        match_score: 4,
        min_est_APR: 5,
        max_est_APR: 9,
        mo_payment: 234.23,
        debt_free_date: '05/20',
        pros: 'multi line strings',
        cons: 'multi line string',
      },
      bt: {
        match_score: 4,
        min_est_APR: 5,
        max_est_APR: 9,
        mo_payment: 234.23,
        debt_free_date: '05/20',
        pros: 'multi line strings',
        cons: 'multi line string',
      },
    },
  },
};

export const lenderData = {
  signature: {
    request: {
      loan_amount: 10000,
      loan_term: '3 years',
      location: 'Texas',
      credit_score_range: 'Good',
    },

    response: [
      {
        lender_name: 'Lender1',
        lender_id: '101',
        lender_logo_url: 'https://s3.amazon.com/some-path1',
        lender_applicaiton_url: 'https://lendor1.com/',
        min_apr: 8.0,
        max_apr: 13.5,
        monthly_payment: 337,
        r_n_r: {
          approval_speed: 5.6,
          charges_and_terms: 4.3,
          customer_service: 7.5,
        },
        best_for: 'string data',
        pros: ['No prepayment fee'],
        cons: ['Charges origination fee'],
        qualify_requirements: '',
        fees_and_penalties: {
          origination_fee: 0,
          prepayment_fee: 10.2,
          late_penalities: 21.4,
        },
        BBB_rating: 'A+',
        trust_pilot: 3,
        j_d_power_index_value: 899,
        j_d_power_index_range: 1000,
      },
    ],
  },
};
