type FormDataType = {
    income: number,
    year: number,
}

interface ITaxBracket {
    max?: number;
    min: number;
    rate: number;
}

interface ITaxData {
    tax_brackets: ITaxBracket[];
}

interface ITaxDetail {
    max?: string;
    min: string;
    tax: string;
    rate: string;
}

interface ITaxCalculatorResult {
    totalTaxes: string;
    effectiveRate: string;
    taxDetails: ITaxDetail[];
}


interface IDataStateProps {
    isSubmiting: boolean;
    setIsSubmitting: Dispatch<SetStateAction<boolean>>;
    taxData: FormDataType;
    setTaxData: Dispatch<SetStateAction<FormDataType>>;
}

interface IGetTaxBrackets {
    year: number
    setData: Dispatch<SetStateAction<FormDataType>>
    setIsError: Dispatch<SetStateAction<boolean>>
    setIsSubmitting: Dispatch<SetStateAction<boolean>>
}


interface IResultsProps {
    income: number;
    data: TaxData;
    isLoading: boolean;
    isError: boolean;
}
