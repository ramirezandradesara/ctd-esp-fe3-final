import {render, screen} from "@testing-library/react";
import Index from "dh-marvel/pages/index";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index/>)
            const title = screen.getByText('¡Bienvenidx a Marvel Store!')
            expect(title).toBeInTheDocument()
        })
    })
})