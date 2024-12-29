export interface SerialTestContentProps{//testcontent
    index: number;
    qName: string;
    options: string[];
    correct_answers: number[];
    img?: string;
};

export interface QuestionProps{
    qNo: number;
    gatherVals: (qNo: number, testContent: TestContentProps)=>void;
}

export interface OptionProps{
    index: number;
    updateOption: (index: number, value: string, check: boolean)=>void;
}


export interface TestContentProps{
    qName: string;
    options: string[];
    correct_answers: number[];
    img?: string;
};

export interface TestProps{//testtype
    index: number;
    testName: string;
    testTime: number;
    notCompleted: boolean;
    testContent: TestContentProps[];
};

export interface TestDetailProps{//halftesttype
    testName: string;
    testTime: number;
    notCompleted: boolean;
    testContent: TestContentProps[];
};

export interface TestDisplayProps{
    key: number;
    test: TestProps;
    onClick: (test: TestProps) => void;
    teach: boolean;
}

export interface AllQsDisplayProps{
    testContent: TestContentProps[];
    teach: boolean;
    getAnswers: (stuAns: boolean[][]) => void;
}

export interface ParentProp{
    test: TestProps;
}

export interface IndivQDisplayProps{
    indexQ: number;
    object: {
        qName: string;
        options: string[];
        correct_answers: number[];
        img?: string;
    };
    teach: boolean;
    updateAnswers: (index: number, checked: boolean[]) => void;
}

export interface ScoreProps{
    test: TestProps;
    testAnswers: boolean[][];
};
