export default function Country({ Country }: { Country: (country: string) => void }) {
    return (
        <select onChange={(e) => console.log(e.target.value)}>
            <option>
                Uzbekistan
            </option>
            <option>
                English
            </option>
            <option>
                Russia
            </option>
            <option>
                Korea
            </option>
            <option>
                Japan
            </option>
        </select>
    )
}