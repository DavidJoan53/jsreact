import Contador from '../contador'
//import { render } from '@testing-library/react'
//import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'



describe('Pruebas sobre el componente contador',()=>{

  //BUSCAR CONSTANTE
  test('Buscar parrafo',()=>{
    const wrapper = shallow(<Contador name="Joan Suarez" propNum={5} />)
    const titulo = wrapper.find('h1').text()
    expect(titulo).toBe('CONTADOR DE CLICKS')

  })

  //BUSCAR VARIABLE
  test('Comprobando nombre', ()=>{
    const wrapper = shallow(<Contador name="Joan Suarez"propNum={0} />)
    const textoparrado = wrapper.find('p').at(0).text()
    const textoenparra = 'Realizado por: Joan Suarez'

    expect(textoenparra).toBe(textoparrado)
  })

  //OBTENER COMPONENTE
  test('Traer button',() => {
    const wrapper = shallow(<Contador propNum={10} />)
    const btn1 = wrapper.find('button').at(0)
    console.log(btn1.html())
  })

  //SUMAS
  test('Simular click boton suma',() => {
    const wrapper = shallow(<Contador propNum={10} />)
    const btn1 = wrapper.find('button').at(0).simulate('click')
    const contando = wrapper.find('p').at(1).text().trim()

    expect(contando).toBe('11')
  })

  //RESTAS
  test('Simular click boton resta',() => {
    const wrapper = shallow(<Contador propNum={15} />)
    const btn1 = wrapper.find('button').at(1).simulate('click')
    const contado = wrapper.find('p').at(1).text().trim()

    expect(contado).toBe('14')
  })
  
  //REINICIO
  test('Simular click boton reinicio',() => {
    const wrapper = shallow(<Contador propNum={8} />)
    const btn1 = wrapper.find('button').at(1)
    btn1.simulate('click')

    const btn3 = wrapper.find('button').at(2).simulate('click')
    const contado = wrapper.find('p').at(1).text().trim()

    expect(contado).toBe('8')
  })
})