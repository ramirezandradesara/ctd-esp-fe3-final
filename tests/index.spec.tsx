import {render, screen} from "@testing-library/react";
import IndexPage from "dh-marvel/pages/index";
import Index from "dh-marvel/pages/index";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index/>)
            const title = screen.getByText('Sample')
            expect(title).toBeInTheDocument()
        })
    })

})