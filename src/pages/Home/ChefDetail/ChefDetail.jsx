/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';


const ChefDetail = () => {
    const { id } = useParams()
    const [chefInfo, setChefInfo] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/chefDetails/${id}`)
            .then((res) => res.json())
            .then((data) => setChefInfo(data))
    }, [id])

    const { name, chefImg, numberOfRecipe, shortBio, likes, experience, recipeName1, recipeName2, recipeName3, ingredients1, ingredients2, ingredients3 } = chefInfo
    console.log('ig', ingredients1)
    // console.log('element',ingredients1[0])
    return (
        <div className='container'>
            <Card >
                <Card.Img
                    style={{ width: '500px', height: '300px' }} className='p-2 mx-auto' variant="top" src=
                    {chefImg} />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>

                    <div>
                        <div className='d-flex gap-5'>
                            <p><small>Number of Likes: {likes}</small></p>
                            <p><small>Number of recipe: {numberOfRecipe}</small></p>
                        </div>
                        <p>Years of Experience: {experience}</p>
                        <p>Short Bio: {shortBio}</p>
                    </div>
                </Card.Body>
            </Card>
            <h2 className='mt-5 mb-2 text-center'>Recipe Details</h2>
            <hr></hr>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item Name: </th>
                            <th scope="col">Ingredient 1 </th>
                            <th scope="col">Ingredient 2 </th>
                            <th scope="col">Ingredient 3 </th>
                            <th scope="col">Ingredient 4 </th>
                            <th scope="col">Ingredient 5 </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{recipeName1}</td>
                            {/* <td>
                                {
                                    ingredients1 &&
                                    ingredients1.map(ig1=><Recipe
                                    key={id}
                                    ig1={ig1}
                                    ></Recipe>)
                                }
                            </td> */}
                            <td>
                                {
                                    ingredients1 &&
                                    ingredients1[0]?.name}
                            </td>
                            <td>
                                {
                                    ingredients1 &&
                                    ingredients1[1]?.name}
                            </td>
                            <td>
                                {
                                    ingredients1 &&
                                    ingredients1[2]?.name}
                            </td>
                            <td>
                                {
                                    ingredients1 &&
                                    ingredients1[3]?.name}
                            </td>
                            <td>
                                {
                                    ingredients1 &&
                                    ingredients1[4]?.name}
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>{recipeName2}</td>
                            {/* <td>
                                {
                                    ingredients1 &&
                                    ingredients1.map(ig1=><Recipe
                                    key={id}
                                    ig1={ig1}
                                    ></Recipe>)
                                }
                            </td> */}
                            <td>
                                {
                                    ingredients2 &&
                                    ingredients2[0]?.name}
                            </td>
                            <td>
                                {
                                    ingredients2 &&
                                    ingredients2[1]?.name}
                            </td>
                            <td>
                                {
                                    ingredients2 &&
                                    ingredients2[2]?.name}
                            </td>
                            <td>
                                {
                                    ingredients2 &&
                                    ingredients2[3]?.name}
                            </td>
                            <td>
                                {
                                    ingredients2 &&
                                    ingredients2[4]?.name}
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                    
                            <td>{recipeName3}</td>
                            {/* <td>
                                {
                                    ingredients1 &&
                                    ingredients1.map(ig1=><Recipe
                                    key={id}
                                    ig1={ig1}
                                    ></Recipe>)
                                }
                            </td> */}
                            <td>
                                {
                                    ingredients3 &&
                                    ingredients3[0]?.name}
                            </td>
                            <td>
                                {
                                    ingredients3 &&
                                    ingredients3[1]?.name}
                            </td>
                            <td>
                                {
                                    ingredients3 &&
                                    ingredients3[2]?.name}
                            </td>
                            <td>
                                {
                                    ingredients3 &&
                                    ingredients3[3]?.name}
                            </td>
                            <td>
                                {
                                    ingredients3 &&
                                    ingredients3[4]?.name}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ChefDetail;