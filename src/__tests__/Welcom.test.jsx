import { render, screen, } from '@testing-library/react'
import Welcome from '../components/Welcome'

describe("test su welcome", ()=>{
    test("welcome ci sta all'avvio", ()=>{
        render(<Welcome/>)
        const welcome=screen.getByText("Benvenuti in EpiBooks!")
        expect(welcome).toBeInTheDocument()
    } )
})
