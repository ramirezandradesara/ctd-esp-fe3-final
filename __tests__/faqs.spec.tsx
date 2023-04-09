import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { faqsData } from "dh-marvel/components/faqs/faqsData";
import Faq from "dh-marvel/pages/preguntas-frecuentes";

describe('FaqPage', () => {
    describe('when rendering default', () => {

        it('should render the title', () => {
            render(<Faq data={faqsData} />)
            const title = screen.getByText('Preguntas frecuentes')
            expect(title).toBeInTheDocument()
        })
            
        it('should render the question without showing answer', async () => {
            render(<Faq data={faqsData} />)
        
            const question = screen.getByText("¿Cuántos comics tienen?");
            const answer = "Actualmente disponemos de toda la colección de Marvel. Algunos ejemplares pueden contar con poca o nula disponibilidad por el momento. Para mas información puede acceder a https://marvel.com"
      
            await waitFor(() => expect(question).toBeInTheDocument());
            await waitFor(() => expect(screen.getByText(answer)).not.toBeVisible());
        })

        it('should render the question and answer when is clicked', async () => {
            render(<Faq data={faqsData} />)
        
            const question = screen.getByText("¿Cuántos comics tienen?");
            const answer = "Actualmente disponemos de toda la colección de Marvel. Algunos ejemplares pueden contar con poca o nula disponibilidad por el momento. Para mas información puede acceder a https://marvel.com"
      
            await userEvent.click(question);
            await waitFor(() => expect(screen.getByText(answer)).toBeVisible());
        })
    })
})
