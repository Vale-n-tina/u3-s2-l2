import { screen, render,fireEvent } from "@testing-library/react";
import App from "../App";
import CommentList from "../components/CommentList";
import AddComment from "../components/AddComment";

test("verifica che CommentArea sia presente nel DOM", async () => {
  render(<App />);
  const CommentArea = await screen.findByPlaceholderText(
    /Inserisci qui il testo/i
  );
  expect(CommentArea).toBeInTheDocument();
});

test("cercando la parola 'sword' nell'input dovrei ottenere al netto della fetch 9 card", async () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/cerca un libro/i)
    fireEvent.change(input, { target: { value: 'sword' } })
    const arrayOfBooks = await screen.findAllByTestId('card')
    expect(arrayOfBooks).toHaveLength(9)})


    test("verifico che la card cambi colore del borso cliccandoci sopra", ()=>{
      render(<App/>)
      const card= screen.getAllByTestId("card")
      const firstCard = card[0]
      fireEvent.click(firstCard)
      expect(firstCard).toHaveStyle("border: 3px solid red")
    })



    test("verifico che la card cambi colore quando clicchi su un altra", ()=>{
      render(<App/>)
      const card= screen.getAllByTestId("card")
      const firstCard = card[0]
      const secondCard=card[1]
      fireEvent.click(firstCard)
      expect(firstCard).toHaveStyle("border: 3px solid red")
      fireEvent.click(secondCard)
      expect(firstCard).toHaveStyle("border: none")
    })


    
    test('verifica che al primo caricamento della pagina la sezione SingleComment non presenta alcuna istanza', () => {
      render(<App />)
      const SingleComment = screen.queryAllByTestId('commento')
      expect(SingleComment).toHaveLength(0)
    })
    
    test("verifica che vengano caricati al click della card", async () => {
      render(<App />);
      const card= screen.getAllByTestId("card")
      const firstCard = card[0]
      fireEvent.click(firstCard)
       const commenti= await screen.findAllByTestId('commento')

      expect(commenti).not.toHaveLength(0);
    });



