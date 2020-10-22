import React, {useState} from 'react'
import Button from "../../../Button/Button";
import clsx from 'clsx';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {setModule} from "../../../../redux/actions/actions";

function MakePlatform({modules, setModule}) {
  const massWithHeaderIcon = Object.values(modules)
  const [selectedModule, setSelectedModule] = useState({})

  if (massWithHeaderIcon.length === 0) {
    return <div>Loading...</div>
  }
  if(Object.values(selectedModule).length === 0 && massWithHeaderIcon.length > 0){
    setSelectedModule(massWithHeaderIcon[0])
  }

  const listHeader = massWithHeaderIcon.map((elem) => {
    const active = elem.name === selectedModule.name
    return <div key={elem.id}
                className={clsx("text-gray-600 h-32 w-32 items-start inline-block p-5 align-top text-center", {"border-b-2 border-gold": active})}
                onClick={() => setSelectedModule(elem)}>
      <i className={clsx("material-icons text-3xl", {"text-gold": active})}>{elem.icon}</i>
      <p className={clsx("text-sm", {"text-black": active})}>{elem.name}</p>
      {elem.default || elem.add ?
        <span className="rounded p-1 bg-opacity-25 bg-orange-200 text-xs text-gold">Добавлен</span> : ''}
    </div>
  })

  return (
    <>
      <div className="m-3 mt-4 shadow">
        <div className="overflow-auto whitespace-no-wrap flex justify-start md:justify-center">
          {listHeader}
        </div>
        <hr className="m-0"/>
        <div className="grid grid-cols-2">
          <p className="m-4 text-semibold text-3xl text-left flex my-auto ">{selectedModule.name}</p>
          <div className='flex justify-end m-4'>
            <Button type="secondary" classNameText="hidden md:inline-block" icon="visibility" text="Предпросмотр"/>
            <Button type="primary" classNameText="hidden md:inline-block"
                    icon={selectedModule.default || selectedModule.add ? 'lock' : 'add'}
                    disabled={selectedModule.default}
                    text={selectedModule.default || selectedModule.add ? 'Модуль добавлен' : 'Добавить модуль'}
                    onClick={() => {
                      selectedModule.add = !selectedModule.add
                      const data = {}
                      data[selectedModule.id] = selectedModule
                      setModule(data)
                    }}
            />
          </div>
          <span className="m-4 col-span-2 md:col-span-1">{selectedModule.description}</span>
          <div className="m-4 col-span-2 md:col-span-1">
            <p className="mb-2 text-sm text-gray-600">Стоимость</p>
            <p className="text-semibold">От {selectedModule.payment} ₽ в день</p>
            <p className="my-2 text-sm text-gray-600 cursor-pointer">
              Этот модуль связан с другими модулями
              <span className="material-icons text-sm text-opacity-75">
                help
              </span>
            </p>
            <p className="text-semibold">
              {selectedModule.dependencies && selectedModule.dependencies.length > 0 ? selectedModule.dependencies.map(elem => {
                return modules[elem].name
              }).join(' / ') : 'Нет взаимосвязей'}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center md:text-left m-3 shadow rounded block md:flex justify-center p-4">
        <div>
          <p className="font-semibold">Добавили все необходимые модули?</p>
          <p>Войдите в созданную платформу и начните работать с ней прямо сейчас</p>
        </div>
        <span className="material-icons hidden md:inline-block my-auto text-4xl text-gray-600 mx-2 text-opacity-50">
          navigate_next
        </span>
        <Button type="primary" className="w-11/12 md:w-auto" text="Войдите в демо платформы"/>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    modules: state.staticData.modules,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setModule: module => dispatch(setModule(module)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MakePlatform)

MakePlatform.propTypes = {
  modules: PropTypes.object,
  setModule: PropTypes.func,
}