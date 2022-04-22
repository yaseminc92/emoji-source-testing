import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import emojiList from "./emojiList.json";
import Header from "./Header"
import App from "./App"


describe("emoji test",()=>{
    let title, emoji,emojiName,input;
    beforeEach(()=>{
        render(<App />);
    })

    test("Header sayfasi basarili bir sekilde render edilmeli",()=>{
        title=screen.getByText("Emoji Search")
       expect(title).toBeInTheDocument();
    });
    test("emoji Listesinin basarili bir sekilde render edilmeli",()=>{
        emoji=screen.getAllByText("Click to copy emoji")
        expect(emoji.length).toEqual(20);
    });
    test("emoji listesinin basarili bir sekilde filtrelenmesi",()=>{
        input=screen.getByTestId("input");
        const text="Gri"
        userEvent.type(input,text);
        expect(text.length).toEqual(3);

    });
})



