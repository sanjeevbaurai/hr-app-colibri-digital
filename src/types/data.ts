export interface IAnalyticsDataLayer {
  application: {
    name: string;
    environment: string;
    is_spa: boolean;
    version: string;
  };
  user: Record<string, unknown>;
  vendor: {
    adobe: {
      analytics: {
        pageName?: string;
      };
    };
  };
  page: {
    last_updated_date_time: string;
    purpose: string;
    labels: string[];
    category: {
      primary_category: string;
      channel: string;
      area: string;
      type: string;
    };
    products: {
      items: never[];
    };
    attributes: unknown;
  };
  experience: {
    service_checker: {
      has_run: boolean;
      service_line_type: string;
      technology: string;
      variant_group: string;
      field_type: never[];
    };
  };
  basket: {
    id: string;
    products: {
      items: never[];
    };
    flags: {
      contains: {
        service: {
          broadband: boolean;
          phone: boolean;
          tv: boolean;
          sport: boolean;
          mobile: boolean;
          mobile_sim: boolean;
          family_sim: boolean;
          digital_voice: boolean;
          halo: boolean;
          halo2: boolean;
          nowtv: boolean;
          full_fibre: boolean;
        };
        service_group: unknown;
      };
    };
  };
}
