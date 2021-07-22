export interface IScoialNormProps {
  backgroundColour: string;
  name: string;
}

export interface IWOLLProps {
  hasWithoutLandline: boolean;
  saleMonthlyCost: number;
  monthlyCost: number;
  postageCost: number;
  activationCost: number;
  contractLength: number;
  ojUrl: string;
  optionsUrl: string;
  resourcePath: string;
  socialNorm: IScoialNormProps;
  promotions: IPromotionProps[];
  checkoutUrl: string;
  optionsJourneyPath: string;
  optionsJourneyType: string;
  sltIds: string;
}

export interface IVariantProps {
  hasVariant: boolean | undefined;
  saleMonthlyCost: number;
  monthlyCost: number;
  postageCost: number;
  activationCost: number;
  contractLength: number;
  ojUrl: string;
  optionsUrl: string;
  resourcePath: string;
  socialNorm: IScoialNormProps;
  promotions: IPromotionProps[];
  withoutLandlineVariant: IWOLLProps;
  checkoutUrl: string;
  optionsJourneyPath: string;
  optionsJourneyType: string;
  sltIds: string;
}

export interface IGeneralProdProps {
  description: string;
  displayName: string;
  packageId: string;
  promotionsEndDate?: Date | null;
  saleMonthlyCost?: number;
  monthlyCost: number;
  postageCost: number;
  activationCost: number;
  contractLength: number;
  ojUrl: string;
  optionsUrl: string;
  optionsJourneyPath: string;
  optionsJourneyType: string;
  resourcePath: string;
  variant1?: IVariantProps;
  variant2?: IVariantProps;
  variant3?: IVariantProps;
  variant4?: IVariantProps;
  productVariant?: number;
  withoutLandlineVariant?: IWOLLProps;
  checkoutUrl: string;
  scode: string;
  planName: string;
  planDesc: string;
}

export interface ISlugProps {
  current: string;
}

export interface ICWFProps extends IGeneralProdProps {
  averageSpeed: number;
  promotions: IPromotionProps[];
  socialNorm?: IScoialNormProps;
}

export interface IPromotionProps {
  _id: number;
  name: string;
  icon: string;
  iconAlt: string;
  anchor: string;
  isRewardCard: boolean;
  reward: {
    rewards_type: string;
    rewards_value: string;
    rewards_strip_text: string;
  };
}

export interface IProductProps extends IGeneralProdProps {
  _id: string;
  socialNorm?: IScoialNormProps;
  averageSpeed: number;
  promotions: IPromotionProps[];
  sltIds: string;
  theme?: string;
  completeWifi: ICWFProps | null;
  landline?: string;
  packageType?: string;
  customerType?: string;
  ctaName?: string;
  // rawAddresses?: unknown
  // addresses?: unknown
  // selectedAddress?: unknown
  // estimateByPostcode?: boolean
  slug: ISlugProps;
}
