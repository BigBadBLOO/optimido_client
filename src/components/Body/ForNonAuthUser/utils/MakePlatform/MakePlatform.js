import React, {useState} from 'react'
import './makePlatform.scss'
import {Col, Container, Row} from "react-bootstrap";
import Button from "../../../../Button/Button";

function MakePlatform(props) {
  const initMassWithHeaderIcon = [
    {
      name: 'Дэшборд',
      icon: 'dashboard',
      add: true,
      description: 'Модуль “Дэшборд” позволяет вам видеть краткую сводку и основные показатели платформы.' +
        ' В этом моудили вы сможете добавлять, удалять и изменять виджеты. ',
      price: 10,
      dependence: ['Интеграция', 'Инструменты', 'Настройки'],
    },
    {name: 'Лиды', icon: 'account_box', add: false},
    {name: 'Аналитика', icon: 'account_box', add: false},
    {name: 'Интеграция', icon: 'account_box', add: true},
    {name: 'Офферы', icon: 'account_box', add: false},
    {name: 'Рекламодатели', icon: 'account_box', add: false},
    {name: 'Инструменты', icon: 'account_box', add: true},
    {name: 'Бухгалтерия', icon: 'account_box', add: false},
    {name: 'Настройки', icon: 'account_box', add: true}
  ]

  const [massWithHeaderIcon, setHeader] = useState(initMassWithHeaderIcon)
  const [selectedModule, setSelectedModule] = useState(initMassWithHeaderIcon[0])

  const listHeader = massWithHeaderIcon.map((elem) => {
    const classList = [
      'headerElem',
      'text-center'
    ]
    if (selectedModule === elem) {
      classList.push('activeModule')
    }
    let addValue = ''
    if (elem.add) {
      addValue = <span>Добавлен</span>
    }
    return <div key={elem.name} className={classList.join(' ')} onClick={e => setSelectedModule(elem)}>
      <i className="material-icons">{elem.icon}</i>
      <div>{elem.name}</div>
      {addValue}
    </div>
  })

  return (
    <div className="commonContainer margin-top-10">
      <div className="headerContainer">
        {listHeader}
      </div>
      <hr/>
      <div>
        <Container>
          <Row>
            <Col>
              <div className="name">{selectedModule.name}</div>
            </Col>
            <Col lg="8" sm="12">
              <div className='float-right buttonGroup'>
              <Button classes="btn-gray" icon="visibility" text="Предпросмотр"/>
              <Button classes="btn-gold" icon="lock" text={selectedModule.add ? 'Модуль добавлен': 'Добавить модуль'}/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col><span>{selectedModule.description}</span></Col>
            <Col>
              <div className="priceTitle">Стоимость</div>
              <div className="price">От {selectedModule.price} ₽ в день</div>
              <div className="priceTitle">Этот модуль связан с другими модулями</div>
              <div className="price"> {typeof selectedModule.dependence === 'object' ? selectedModule.dependence.join(' / ') : 'Нет взаимосвязей'}</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default MakePlatform