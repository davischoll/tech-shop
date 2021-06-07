import React from 'react'
import styles from './ProductList.module.css'

/**
 * Formats the price value to the Brazilian
 * Real currency format with 'R$'
 * 
 * @param {float} value - The price value to be formatted
 * @returns numeric string
 */
 const formatPriceNumber = value => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

const ProductList = ({ produtos }) => {
  return (
    <div className={styles.productList}>
      {produtos.map((produto) => (
        <div key={produto.id} className={styles.productItem}>
          <img src={produto.image} width={170} height={170} />
          <h3>{produto.name}</h3>
          <p>{produto.description}</p>
          <p>De: R${produto.precoAntigo}</p>
          <h4>Por: R${produto.price}</h4>
          <p>Ou {produto.installments.count}x de R${produto.installments.value}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList
