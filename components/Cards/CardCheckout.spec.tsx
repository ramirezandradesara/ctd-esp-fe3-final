import {render, screen} from "@testing-library/react";
import Index from "dh-marvel/pages/index";
import CardCheckout from "./CardCheckout";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<CardCheckout title={"Gun Theory (2003) #3"} image={"image.jpg"} id={0} price={0}/>)
            const title = screen.getByText('Gun Theory (2003) #3')
            expect(title).toBeInTheDocument()
        })
    })
})