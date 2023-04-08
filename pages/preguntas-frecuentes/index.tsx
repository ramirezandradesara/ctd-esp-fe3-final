import React from 'react'
import { FaqsType } from 'dh-marvel/components/faqs/faqsData'
import SimpleAccordion from 'dh-marvel/components/Accordions/SimpleAccordion'
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';

export const getStaticProps = async () => {
  const res = await fetch(`https://my-marvel-store.vercel.app/api/faq`);
  const data: FaqsType[] = await res.json();

  return {
    props: {
      data
    }
  };
};

interface FaqProps {
  data: FaqsType[];
}

const Faq: React.FC<FaqProps> = ({ data }) => {
  return (
    <LayoutGeneral>
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
    </LayoutGeneral >
  )
}

export default Faq