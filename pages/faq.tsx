import React from 'react'
import { faqsData } from 'dh-marvel/components/faqs/faqsData'
import { FaqsType } from 'dh-marvel/components/faqs/faqsData'
import SimpleAccordion from 'dh-marvel/components/SimpleAccordion'

export const getStaticProps = async () => {
  const res = await fetch("https://my-marvel-store.vercel.app/api/faq");
  const data: FaqsType[] = await res.json();

  return {
    props: {
      data
    }
  };
};

interface Props {
  data: FaqsType[];
}

const Faq: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map(faq => {
        return (
          <SimpleAccordion
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        )
      })}
    </div>
  )
}

export default Faq