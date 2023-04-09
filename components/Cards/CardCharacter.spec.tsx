import {render, screen} from "@testing-library/react";
import CardCharacter from "./CardCharacter";

describe('CardComic', () => {
    describe('when rendering default', () => {

        it('should render the title', () => {
            render(<CardCharacter name={"Gun Theory (2003) #3"} description={"A real superhero!"} image={"image.jpg"} id={0}/>)
            const title = screen.getByText('Gun Theory (2003) #3')
            expect(title).toBeInTheDocument()
        })
    })
})

// npm run test CardComic.spec.tsx