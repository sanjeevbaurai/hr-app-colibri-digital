import { IProductProps } from './product';

export interface IAddressProps {
  addressId: string;
  BuildingNumber?: string | undefined | null;
  fttpFieldType?: string | undefined | null;
  SubBuildingName?: string | undefined | null;
  DependentThoroughfareName?: string | undefined | null;
  ThoroughfareName?: string | undefined | null;
  BuildingName?: string | undefined | null;
}
export interface IRawAddressesProps {
  addresses: IAddressProps[] | null;
}

export interface IServiceCheckerStateType1 {
  isLoading: boolean;
  hasError: boolean;
  postcode: string | null | undefined;
  landline: string | null | undefined;
  rawAddresses: IRawAddressesProps | null | undefined;
  addresses: IAddressProps[] | null | undefined;
  selectedAddress: IAddressProps | null | undefined;
  estimateByPostcode: boolean;
}
export interface IserviceCheckerDataProps {
  custom: {
    resultDetailsHeading: {
      postcode: string;
      selectedAddress?: string;
    };
  };
  specific: {
    '/aem/storefront/broadband': { jsonId: string; textId: string };
  };
  common: {
    filteringData: {
      default: {
        type: string;
      };
    };
  };
}

export interface IScenarioProps {
  scenario: string;
  packages: IProductProps[];
  variant?: number;
}

export interface IServiceCheckerStateProps {
  isFetchingScenario: boolean;
  fetchingScenarioError: boolean;
  isFetchingProductData: boolean;
  fetchingProductDataError: boolean;
  hasError: boolean;
  scenario: IScenarioProps | null;
  serviceCheckerData: IserviceCheckerDataProps | null;
  serviceCheckerOpen: boolean;
  productUnavailable: unknown;
  productId: string | null;
  goToDetails: boolean;
  goToOptions: boolean;
  goToCheckout: boolean;
  completeWifi: boolean;
  showAllDeals: boolean;
  showAlternateProducts: boolean;
  showWithUs: boolean;
  customerType?: string | null;
}

export interface ISCStateProps {
  isFetchingScenario?: boolean;
  fetchingScenarioError?: boolean;
  isFetchingProductData?: boolean;
  fetchingProductDataError?: boolean;
  hasError?: boolean;
  scenario?: IScenarioProps | null;
  serviceCheckerData?: IserviceCheckerDataProps | null;
  serviceCheckerOpen?: boolean;
  productUnavailable?: unknown;
  productId?: string | null;
  goToDetails?: boolean;
  goToOptions?: boolean;
  goToCheckout?: boolean;
  completeWifi?: boolean;
  showAllDeals?: boolean;
  showAlternateProducts?: boolean;
  showWithUs?: boolean;
  customerType?: string | null;
}

export interface IServiceCheckerState extends ISCStateProps {
  toggleProducts: () => void;
  scenarioFetchInit: () => unknown;
  setScenario: (scenario: IScenarioProps | null) => void;
  state: ISCStateProps;
  openServiceChecker: (
    productId?: null | string,
    goToDetails?: boolean,
    goToOptions?: boolean,
    goToCheckout?: boolean,
  ) => void;
  closeServiceChecker: () => void;
  setServiceCheckerData: (
    serviceCheckerData: IserviceCheckerDataProps | null,
    scenarioId: string,
  ) => void;
  scenarioFetchFailed: () => void;
  productDataFetchInit: () => void;
  productDataFetchFailed: () => void;
  toggleCompleteWifi: () => void;
  reset: () => void;
  showAllProductDeals: () => void;
  resetCompleteWifi: () => void;
  toggleCustomerType: (TOGGLE_CUSTOMER_TYPE: string | null) => void;
}
export interface IPayloadProps {
  selectedAddress?: IAddressProps | null | undefined;
  landline?: string;
  postcode?: string;
  rawAddresses?: IRawAddressesProps | null | undefined;
  addresses?: IAddressProps[];
}

export interface IAction {
  type: string;
  payload?: IPayloadProps;
}

export interface ISCPayloadProps {
  productId: string | null;
  goToDetails: boolean;
  goToOptions: boolean;
  goToCheckout: boolean;
  serviceCheckerData: unknown;
  productUnavailable: boolean;
  scenario: IScenarioProps | null;
  showAllDeals: boolean;
}

export interface ISCAction {
  type: string;
  payload?: ISCStateProps;
}

export interface IEstimateProps {
  downloadSpeedMax: number | null;
  downloadSpeedMin: number | null;
  minGuaranteeDownloadSpeed: number | null;
  uploadSpeedMin: number | null;
  uploadSpeedMax: number | null;
}
