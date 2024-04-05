import {FC} from "react";
import {observer} from "mobx-react-lite";
import {Button, ButtonGroup, Container, List, ListItem, Paper, Slider, Typography} from "@mui/material";
import {TestViewModel} from "./test.vm.ts";
import styled from "@emotion/styled";

export const Test:FC<{vm: TestViewModel}> = observer(x => {
    const marks = [
        {value: -2, label: "-2"},
        {value: -1, label: "-1"},
        {value: 0, label: "0"},
        {value: 1, label: "1"},
        {value: 2, label: "2"},
    ]
    const QuestionCard = styled(Paper)`
      display: flex;
      flex-direction:column ;
        width: 900px;
        height:300px ;
        padding: 20px 30px;
      justify-content: space-between;
    `
    return<Container style={{marginTop: "100px"}}>
        {!x.vm.isTestEnded
        ? <QuestionCard>
                <Typography height="200px" fontSize={24}>{x.vm.selectedQuestion.id}. {x.vm.selectedQuestion.question}</Typography>
                <Slider style={{width: "200px"}}
                        aria-label="Custom marks"
                        defaultValue={0}
                        marks={marks}
                        value={x.vm.selectedQuestion.value}
                        onChange={(_,v)=>x.vm.selectedQuestion.value = Number(v)}
                        step={1}
                        min={-2}
                        max={2} />
                <ButtonGroup>
                    <Button onClick={()=> {
                        x.vm.previousQuestion()
                    }}>
                        Предыдущий
                    </Button>
                    <Button onClick={()=>x.vm.nextQuestion()}>
                        Следующий
                    </Button>
                </ButtonGroup>
            </QuestionCard>
        :<QuestionCard>
                <List>
                    {x.vm.getResults().map(r =>(
                        <ListItem><Typography fontSize={24}>{r.name}: {r.result}</Typography></ListItem>
                    ))}
                </List>

            </QuestionCard>
        }
    </Container>
})
