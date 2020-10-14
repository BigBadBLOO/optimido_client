import React from "react";

import Button from "../../Button/Button";
import dashboard from "../../../images/dashboard.svg";
import MakePlatform from "./utils/MakePlatform";


function BodyForNonAuthUser() {
  return (
    <div>

      <p className="text-center m-3 mt-20 text-2xl md:text-4xl font-bold md:leading-10">
        Платформа для оптимизации работы <br className="hidden md:block"/> с интернет-рекламой
      </p>

      <p className="text-center m-3 mt-4 font-normal text-gray-600 text-lg">Автоматизируйте рутиные задачи,
        систематизируйте бизнес-процессы <br className="hidden md:block"/> и отслеживайте эффективность интернет-рекламы
      </p>

      <div className="flex justify-center m-3 mt-4">
        <Button type="primary" text="Попробовать бесплатно"/>
      </div>

      <p className="text-center m-3 text-gray-600 text-sm font-medium"> 14 дней пробный период</p>

      <img src={dashboard} className="w-full flex mx-auto mt-10" alt="dashboard"/>

      <div
        className="flex justify-center mx-auto px-5 md:max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-4">

        <p className="my-4 text-2xl md:text-3xl font-bold md:col-span-2">Возможности для ваших задач</p>

        <div className="mt-4">
          <i className="text-5xl text-gold material-icons">assessment</i>
          <p className="text-xl font-semibold my-3">Статистика в едином центре</p>
          <span>Интегируйте свои рекламные кабинеты из более, чем 20 источников трафика. Optimido свяжет расходы и
            доходы в автоматическом режиме для отображения полной картины эффективности вашей рекламы.</span>
        </div>

        <div className="mt-4">
          <i className="text-5xl text-gold material-icons">build</i>
          <p className="text-xl font-semibold my-3">Маркетинговые инструменты</p>
          <span>Моментальное формирование 14 видов аналитик на основе данных из рекламных кабинетов, посещаемости и
            посетителей лендингов, ваших доходов для улучшения бизнес-процессов.</span>
        </div>
        <div className="mt-4">
          <i className="text-5xl text-gold material-icons">supervisor_account</i>
          <p className="text-xl font-semibold my-3">Командная работа</p>
          <span>Добавьте своих коллег и распределите зоны отвественности с помощью удобных иснтрументов для командной
            работы. Отслеживайте эффективность каждого члена команды.</span>
        </div>
        <div className="mt-4">
          <i className="text-5xl text-gold material-icons">account_balance_wallet</i>
          <p className="text-xl font-semibold my-3">Автоматическая бухгалтерия</p>
          <span>Счета, акты, сверки, выписки и полная финансовая картина вашей маркетинговой деятельности в удобном
            и функциональном отчете.</span>
        </div>
      </div>

      <p className="m-3 mt-10 text-center text-3xl font-bold">Тарифы</p>

      <div className="flex flex-no-wrap md:justify-center overflow-x-auto mt-10 mx-5">
        <div className="m-3 p-6 text-center shadow md:w-54">
          <span className="font-semibold  text-3xl">1000</span>
          <p className="text-gray-600 w-48 md:w-auto text-sm">Работа в сервисе <br/>до 1 000 лидов в месяц</p>
          <hr className="w-20 my-5 mx-auto border border-gold"/>
          <span className="font-semibold">от 10 ₽ <br/><small> в день</small></span>
          <div className="flex justify-center my-4">
            <Button type="primary" text="Попробовать"/>
          </div>
          <span className="text-sm text-gray-600"> 14 дней бесплатно</span>
        </div>
        <div className="m-3 p-6 text-center shadow md:w-54">
          <span className="font-semibold  text-3xl">2000</span>
          <p className="text-gray-600 w-48 md:w-auto  text-sm">Работа в сервисе <br/>до 2 000 лидов в месяц</p>
          <hr className="w-10 my-5 mx-auto border border-gold"/>
          <span className="font-semibold">от 20 ₽ <br/><small> в день</small></span>
          <div className="flex justify-center my-4">
            <Button type="primary" text="Попробовать"/>
          </div>
          <span className="text-sm text-gray-600"> 14 дней бесплатно</span>
        </div>
        <div className="m-3 p-6 text-center shadow md:w-54">
          <span className="font-semibold  text-3xl">3000</span>
          <p className="text-gray-600 w-48 md:w-auto text-sm">Работа в сервисе <br/>до 3 000 лидов в месяц</p>
          <hr className="w-10 my-5 mx-auto border border-gold"/>
          <span className="font-semibold">от 30 ₽ <br/><small> в день</small></span>
          <div className="flex justify-center my-4">
            <Button type="primary" text="Попробовать"/>
          </div>
          <span className="text-sm text-gray-600"> 14 дней бесплатно</span>
        </div>
        <div className="m-3 p-6 text-center shadow md:w-54">
          <span className="font-semibold  text-3xl">4000</span>
          <p className="text-gray-600 w-48 md:w-auto text-sm">Работа в сервисе <br/>до 4 000 лидов в месяц</p>
          <hr className="w-10 my-5 mx-auto border border-gold"/>
          <span className="font-semibold">от 40 ₽ <br/><small> в день</small></span>
          <div className="flex justify-center my-4">
            <Button type="primary" text="Попробовать"/>
          </div>
          <span className="text-sm text-gray-600"> 14 дней бесплатно</span>
        </div>
      </div>

      <p className="mx-3 mt-10 text-center text-3xl font-bold">Соберите свою платформу</p>

      <p className="mx-3 text-center text-sm sm:text-base text-gray-600">Собирите платформу из необходимых модулей,
        которые подходят <br className="hidden md:block"/> конкретно под вашу деятельность
      </p>

      <p className="m-3 p-1 bg-green-400 text-white text-center rounded">
        Не знаете какие модули вам нужны?
        <i className="material-icons float-right">keyboard_arrow_down</i>
      </p>


      {/*<Accordion defaultActiveKey="1" className="margin-top-20">*/}
      {/*  <Accordion.Toggle className="buttonCollapse" eventKey="0">*/}
      {/*    Не знаете какие модули вам нужны?*/}
      {/*    <i className="material-icons float-right">keyboard_arrow_down</i>*/}
      {/*  </Accordion.Toggle>*/}
      {/*  <Accordion.Collapse eventKey="0">*/}
      {/*    <h1>Подсказка</h1>*/}
      {/*  </Accordion.Collapse>*/}

      {/*</Accordion>*/}

      <MakePlatform/>
    </div>
  )
}

export default BodyForNonAuthUser