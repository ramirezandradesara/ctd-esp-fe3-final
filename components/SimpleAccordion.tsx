import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaqsType } from 'dh-marvel/components/faqs/faqsData'

export default function SimpleAccordion({ question, answer }: FaqsType) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            margin: '5px'
          }}>
          <Typography
            sx={{
              fontWeight: '600',
              color: "#305f8f  "
            }}>
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {typeof answer === 'string'
            ? (
              <Typography>
                {answer}
              </Typography>
            )
            : <>
              {answer.length === 0
                ? (
                  <Typography>
                    Información no disponible
                  </Typography>
                )
                : (
                  <>
                    {
                      answer.map((answer: any, index: number) => {
                        return (
                          <Typography key={index}>
                            {answer.name}
                          </Typography>
                        )
                      })
                    }
                  </>
                )
              }
            </>
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}