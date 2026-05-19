import axios from "axios";

import { useEffect, useRef, useState } from "react"

export function CarouselDemo() {

    const [recipe, setRecipe] = useState({ id: 0, name: '', image: '' });

    const [status, setStatus] = useState('Slide Show - Manual');

    let productId = useRef(1);

    let thread = useRef(null);

    function LoadRecipe(id) {

        axios.get(`https://dummyjson.com/recipes/${id}`)

            .then(response => {

                setRecipe(response.data);

            })

    }

    useEffect(() => {

        LoadRecipe(1);

    }, [])

    function handleNextClick() {

        productId.current = productId.current + 1;

        LoadRecipe(productId.current);

        setStatus('Slide Show - Manual');

    }

    function handlePrevClick() {

        productId.current = productId.current - 1;

        LoadRecipe(productId.current);

        setStatus('Slide Show - Manual');

    }

    function LoadRecipeAuto() {

        productId.current = productId.current + 1;

        LoadRecipe(productId.current);

    }

    function handlePlayClick() {

        thread.current = setInterval(LoadRecipeAuto, 5000);

        setStatus('Slide Show - Running');

    }

    function handlePauseClick() {

        clearInterval(thread.current);

        setStatus('Slide Show - Paused');

    }



    return (

        <div className="container d-flex justify-content-center">

            <div className="card w-50 mt-4 p-2">

                <div className="card-header text-center">

                    <div className="card-title text-center">{recipe.name}</div>

                    <div className="mt-1 fw-bold">({status})</div>

                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">

                            <button onClick={handlePrevClick} className="btn btn-dark bi bi-chevron-left"></button>

                        </div>

                        <div className="col-10">

                            <img height={300} width="100%" src={recipe.image} />

                            <div>

                                <input type="range" min={1} max={30} value={productId.current} className="form-range" />

                            </div>

                        </div>

                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">

                            <button onClick={handleNextClick} className="btn btn-dark bi bi-chevron-right"></button>

                        </div>

                    </div>

                </div>

                <div className="card-footer text-center">

                    <button onClick={handlePlayClick} className="btn btn-success bi bi-play"></button>

                    <button onClick={handlePauseClick} className="btn btn-warning bi bi-pause mx-2"></button>

                </div>

            </div>

        </div>

    )

}

