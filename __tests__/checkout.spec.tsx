import { render, screen, waitFor } from "@testing-library/react";
import Checkout from "dh-marvel/pages/checkout";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/shared/lib/router-context";

const createMockRouter = (router: Partial<NextRouter>): NextRouter => {
    return {
        basePath: "",
        pathname: "/checkout",
        route: "/checkout?comic=82967",
        query: { comic: "82967" },
        asPath: "/checkout?comic=82967",
        back: jest.fn(),
        beforePopState: jest.fn(),
        prefetch: jest.fn(),
        push: jest.fn(),
        reload: jest.fn(),
        replace: jest.fn(),
        events: {
            on: jest.fn(),
            off: jest.fn(),
            emit: jest.fn(),
        },
        isFallback: false,
        isLocaleDomain: false,
        isReady: true,
        defaultLocale: "en",
        domainLocales: [],
        isPreview: false,
        ...router,
    };
};

let router = createMockRouter({});

describe('Checkout', () => {
    it('should render the title', () => {
        render(
            <RouterContext.Provider value={router}>
                <Checkout />
            </RouterContext.Provider>
        )
        const title = screen.getByText('Checkout')
        expect(title).toBeInTheDocument()
    })
})

// npm test checkout.spec.tsx
