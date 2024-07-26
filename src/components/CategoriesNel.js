import '../styles/Categories.css'

function Categories({ categories, activeCat, setActiveCat }) {

    return (
        <div className='lmj-categories'>
            <select className='lmj-categories-select'
                value={activeCat}
                name="catSelect"
                onChange={(e) => setActiveCat(e.target.value)}
            >
                <option key="allCat" value="">---</option>
                {
                    categories.map((cat, index) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))
                }
            </select>
            <button onClick={() => setActiveCat("")}>Réinitialiser</button>
        </div>
    )
}

export default Categories