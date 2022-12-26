import React from 'react'
import Table from '../../Component/Table/Table'

function CartPage() {
    const product = [
        {
          name: "Lindsay Walton",
          title: "Front-end Developer",
          email: "lindsay.walton@example.com",
          role: "Member",
        },
        {
          name: "Lindsay Walton",
          title: "Front-end Developer",
          email: "lindsay.walton@example.com",
          role: "Member",
        },
        {
          name: "Lindsay Walton",
          title: "Front-end Developer",
          email: "lindsay.walton@example.com",
          role: "Member",
        },
        {
          name: "Lindsay Walton",
          title: "Front-end Developer",
          email: "lindsay.walton@example.com",
          role: "Member",
        },
        {
          name: "Lindsay Walton",
          title: "Front-end Developer",
          email: "lindsay.walton@example.com",
          role: "Member",
        },
        {
          name: "Lindsay Walton",
          title: "Front-end Developer",
          email: "lindsay.walton@example.com",
          role: "Member",
        },
      ];
  return (
    <Table infos={product} name={"cart"} />
  )
}

export default CartPage