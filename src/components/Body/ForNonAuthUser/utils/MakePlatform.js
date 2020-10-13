import React, {useState} from 'react'
import Button from "../../../Button/Button";
import clsx from 'clsx';

function MakePlatform() {
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

  const [massWithHeaderIcon, ] = useState(initMassWithHeaderIcon)
  const [selectedModule, setSelectedModule] = useState(initMassWithHeaderIcon[0])

  const listHeader = massWithHeaderIcon.map((elem) => {
    const active = elem.name === selectedModule.name
    return <div key={elem.name}
                className={clsx("text-gray-600 h-32 w-32 items-start inline-block p-5 align-top text-center", {"border-b-2 border-gold": active})}
                onClick={() => setSelectedModule(elem)}>
      <i className={clsx("material-icons text-3xl", {"text-gold": active})}>{elem.icon}</i>
      <p className={clsx("text-sm", {"text-black": active})}>{elem.name}</p>
      {elem.add ? <span className="rounded p-1 bg-opacity-25 bg-orange-200 text-xs text-gold">Добавлен</span> : ''}
    </div>
  })

  return (
    <div className="m-3 mt-4 shadow">
      <div className="overflow-auto whitespace-no-wrap flex justify-start md:justify-center">
        {listHeader}
      </div>
      <hr className="m-0"/>
      <div>
        <div className="flex justify-between">
          <p className="m-5 text-bold text-2xl text-center my-auto">{selectedModule.name}</p>
          <div className='flex justify-end m-5'>
            <Button type="secondary" classNameText="hidden md:inline-block" icon="visibility" text="Предпросмотр"/>
            <Button type="primary" classNameText="hidden md:inline-block" icon={selectedModule.add ? 'lock' : 'add'} disabled={selectedModule.add} text={selectedModule.add ? 'Модуль добавлен' : 'Добавить модуль'}/>
          </div>

        </div>
        <div>
          <span>{selectedModule.description}</span>
          <div>
            <div className="priceTitle">Стоимость</div>
            <div className="price">От {selectedModule.price} ₽ в день</div>
            <div className="priceTitle">Этот модуль связан с другими модулями</div>
            <div
              className="price"> {typeof selectedModule.dependence === 'object' ? selectedModule.dependence.join(' / ') : 'Нет взаимосвязей'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakePlatform