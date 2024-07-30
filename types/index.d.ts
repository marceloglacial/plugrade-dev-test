type FormDataType = {
    income: number,
    year: number,
}

interface DataProps {
    data: FormDataType;
    setData: any;
}

interface TaxBracket {
    max?: number;
    min: number;
    rate: number;
}

interface TaxData {
    tax_brackets: TaxBracket[];
}

interface TaxDetail {
    max?: string;
    min: string;
    tax: string;
    rate: string;
}

interface TaxCalculatorResult {
    totalTaxes: string;
    effectiveRate: string;
    taxDetails: TaxDetail[];
}


interface DataStateProps {
    isSubmiting: boolean;
    setIsSubmitting: Dispatch<SetStateAction<boolean>>;
    taxData: FormDataType;
    setTaxData: Dispatch<SetStateAction<FormDataType>>;
}

interface GetTaxBracketsProps {
    year: number
    setData: Dispatch<SetStateAction<FormDataType>>
    setIsError: Dispatch<SetStateAction<boolean>>
    setIsSubmitting: Dispatch<SetStateAction<boolean>>
}


interface ResultsProps {
    income: number;
    data: TaxData;
    isLoading: boolean;
    isError: boolean;
}
