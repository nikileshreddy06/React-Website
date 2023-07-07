import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./Images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./Images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./Images/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./Images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./Images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./Images/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./Images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./Images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./Images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./Images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./Images/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories