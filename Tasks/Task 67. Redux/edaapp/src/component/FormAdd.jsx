const React = require("react");

const FormAdd = (props) => {

    let [data, setData] = React.useState({
        name: "",
        price: 0,
        quantity: 0,
        productUnit: "",
        favorite: false,
        productImage: "",
        
    })

    let [formError, setFormError] = React.useState({
        name: "",
        price: "",
        quantity: "",
        productUnit: "",
        productImage: "",
    });

    function validate() {
        let isValid = true;

        if (data.name == "") {
            formError.name = "Поле не заполнено";
            isValid = false;
        }
        if (data.price == "") {
            formError.price = "Поле не заполнено";
            isValid = false;
        }
        if (data.quantity == "") {
            formError.quantity = "Поле не заполнено";
            isValid = false;
        }
        if (data.productImage == "") {
            formError.productImage = "Картинка не выбрана";
            isValid = false;
        }
        if (data.productUnit == "") {
            formError.productUnit = "Выберите единицу измерения";
            isValid = false;
        }

        setFormError({ ...formError });
        return isValid;
    }



    function handleFormSubmit(event) {
        event.preventDefault();

        if (!validate()) {
            return false;
        }

        props.onProductAdd(data);
        setData({
            name: "",
            price: 0,
            quantity: 0,
            favorite: false,
            productImage: "",
        });

        setFormError({
            name: "",
            price: "",
            quantity: "",
            productImage: "",
        })

    }


    function handleNameChange(event) {
        setData({ ...data, name: event.target.value });
    }

    function handlePriceChange(event) {
        setData({ ...data, price: event.target.value });
    }

    function handleQuantityChange(event) {
        setData({ ...data, quantity: event.target.value });
    }

    function handleSelectChange(event) {
        setData({ ...data, productUnit: event.target.value })
    }

    function handleFavoriteChange(event) {
        setData({ ...data, favorite: event.target.checked });
    }

    function handleImageChange(event) {
        setData({ ...data, productImage: event.target.value })
    }

    return (<>
        <form className="blog_form" action="" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Название</label>
                {(formError.name != "") ? <input type="text" className="form-control border-red" id="name" value={data.name} onChange={handleNameChange} /> : <input type="text" className="form-control" id="name" value={data.name} onChange={handleNameChange} />}
                {formError.name != "" && <div className="validate-red">{formError.name}</div>}
            </div>






            
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Цена</label>
                {(formError.price != "") ? <input type="text" className="form-control border-red" id="name" value={data.price} onChange={handlePriceChange} /> : <input type="text" className="form-control" id="name" value={data.price} onChange={handlePriceChange} />}
                {formError.price != "" && <div className="validate-red">{formError.price}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Количество</label>
                {formError.quantity != "" && < input type="text" className="form-control border-red" id="quantity" value={data.quantity} onChange={handleQuantityChange} />}
                {formError.quantity == "" && < input type="text" className="form-control" id="quantity" onChange={handleQuantityChange} />}
                {formError.quantity != "" && <div className="validate-red">{formError.quantity}</div>}
            </div>
            <div className="mb-3" >
                {formError.productUnit != "" && <div className="form-control border-red">
                    <select className="form-select" id="productUnit" value={data.productUnit} onChange={handleSelectChange}>
                        <option value="">Единица измерения</option>
                        <option value="кг">кг</option>
                        <option value="литр">литр</option>
                        <option value="шт.">шт.</option>
                    </select>
                </div>}
            </div>
            {formError.productUnit == "" && <div className="form-control ">
                <select className="form-select" id="productUnit" onChange={handleSelectChange}>
                    <option value="">Единица измерения</option>
                    <option value="кг">кг</option>
                    <option value="литр">литр</option>
                    <option value="шт.">шт.</option>
                </select>
            </div>}

            <div className="mb-3">
                <label htmlFor="productImage" className="form-label">Картинка</label>
                {formError.productImage != "" && < input type="text" className="form-control border-red" id="image" value={data.productImage} onChange={handleImageChange} />}
                {formError.productImage == "" && < input type="text" className="form-control" id="image" onChange={handleImageChange} />}
                {formError.productImage != "" && <div className="validate-red">{formError.productImage}</div>}
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="favorite" onChange={handleFavoriteChange} checked={data.favorite} />
                    <label className="form-check-label" htmlFor="favorite">
                        Избранное
                    </label>
                </div>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Добавить</button>
            </div>
        </form>
    </>)
}

module.exports = FormAdd;