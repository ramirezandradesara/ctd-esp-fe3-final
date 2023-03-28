import React from 'react'
import { FaqsType } from 'dh-marvel/components/faqs/faqsData'
import SimpleAccordion from 'dh-marvel/components/SimpleAccordion'
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';

export const getServerSideProps = async () => {
  // const res = await fetch(`https://${process.env.VERCEL_URL}api/faq`);
  // const res = await fetch(`https://my-marvel-store.vercel.app/api/faq`);
  const res = await fetch(`http://localhost:3000/api/faq`);
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
    <BodySingle title='FAQ'>
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
    </BodySingle>
  )
}

export default Faq