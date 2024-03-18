import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    // State to store fetched products
    const [products, setProducts] = useState([]);

    // Replace these values with your actual Storefront API access token and shop name
    const ACCESS_TOKEN = '14909cb6a577fc9797feff77bc5d2296';
    const SHOP_NAME = 'your_shop_name';

    useEffect(() => {
        // Construct the URL for fetching products
        const productsUrl = `https://adb0fe-0d.myshopify.com/api/2021-10/graphql`;

        // GraphQL query to fetch products
        const graphqlQuery = `
            {
                products(first: 10) {
                    edges {
                        node {
                            id
                            title
                            description
                            images(first: 1) {
                                edges {
                                    node {
                                        originalSrc
                                    }
                                }
                            }
                            
                        }
                    }
                }
            }
        `;

        // Make the POST request with the access token to fetch products
        axios.post(productsUrl, {
            query: graphqlQuery
        }, {
            headers: {
                'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN,
            },
        })
        .then(productsResponse => {
            // Check if the request was successful
            if (productsResponse.status === 200) {
                // Parse the JSON response
                const productsData = productsResponse.data.data.products.edges;

                // Update the state with fetched products
                setProducts(productsData);
            } else {
                console.error(`Error fetching products: ${productsResponse.status}`);
            }
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []); // Empty dependency array to run effect only once

    console.log(products);
    return (
        

<div className="tab-content">
                <div id="" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                               
                            {products.map((product) => 
                     <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                            <img src={product.node.images.edges[0].node.originalSrc} className="img-fluid w-100 rounded-top" alt=""></img>
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"  style={{top:"10px", left:"10px"}}>Fruits</div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>{product.node.title}</h4>
                            <p>{product.node.description}</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    </div>
                )}
                            
                                
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export { Products };
