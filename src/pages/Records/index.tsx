import React from 'react';
import {useSelector} from "react-redux";

import {recordsSelector} from "../../__data__/selectors/records";

import {CardStyled, TitleStyled} from "./style";
import {CardContent, Typography} from "@mui/material";

export const Records: React.FC = () => {
    const records = useSelector(recordsSelector)

    return (
        <>
            <TitleStyled>
                Records
            </TitleStyled>
            {
                records.map((record) => (
                    <CardStyled>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                                {record.date}
                            </Typography>
                            <Typography variant="h6" component="div">
                                Вопросов: {record.correctAnswersCount} / {record.answers}
                            </Typography>
                        </CardContent>
                    </CardStyled>
                ))
            }
        </>
    );
};
