import Button from "../../Button/Button";
import dashboard from "../../../images/dashboard.png";
import React from "react";
import './BodyForNonAuthUser.scss'
import MakePlatform from "./utils/MakePlatform/MakePlatform";


function BodyForNonAuthUser(props) {
  return (
    <div>
      <div className="text-center m-3 mt-20 text-3xl md:text-4xl font-bold">
        <span className="">Платформа для оптимизации работы <br/> с интернет-рекламой</span>
      </div>

      <div className="text-center m-3 mt-4">
        <span className="text-gray-600 text-lg">Автоматизируйте рутиные задачи, систематизируйте бизнес-процессы <br/> и отслеживайте эффективность интернет-рекламы</span>
      </div>

      <div className="flex justify-center m-3 mt-4">
        <Button classes="rounded bg-gold text-white text-1x p-1 focus:outline-none" text="Попробовать бесплатно"/>
      </div>

      <div className="text-center m-3 mt-4">
        <span className="text-gray-600 text-sm"> 14 дней пробный период</span>
      </div>

      <div className="flex justify-center m-3 mt-10 px-5">
        <img src={dashboard} className="w-full md:w-10/12" alt="dashboard"/>
      </div>


      <div
        className="flex justify-center mx-auto mt-10 px-5 md:px-20 md:max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="md:col-span-2">
          <span className="my-10 text-2xl md:text-2xl font-bold ">Возможности для ваших задач</span>
        </div>
        <div>
          <i className="text-5xl text-gold material-icons">assessment</i>
          <div className="text-xl font-bold my-3"><span>Статистика в едином центре</span></div>
          <span>Интегируйте свои рекламные кабинеты из более, чем 20 источников трафика. Optimido свяжет расходы и
            доходы в автоматическом режиме для отображения полной картины эффективности вашей рекламы.</span>
        </div>
        <div>
          <i className="text-5xl text-gold material-icons">build</i>
          <div className="text-xl font-bold my-3"><span>Маркетинговые инструменты</span></div>
          <span>Моментальное формирование 14 видов аналитик на основе данных из рекламных кабинетов, посещаемости и
            посетителей лендингов, ваших доходов для улучшения бизнес-процессов.</span>
        </div>
        <div>
          <i className="text-5xl text-gold material-icons">supervisor_account</i>
          <div className="text-xl font-bold my-3"><span>Командная работа</span></div>
          <span>Добавьте своих коллег и распределите зоны отвественности с помощью удобных иснтрументов для командной
            работы. Отслеживайте эффективность каждого члена команды.</span>
        </div>
        <div>
          <i className="text-5xl text-gold material-icons">account_balance_wallet</i>
          <div className="text-xl font-bold my-3"><span>Автоматическая бухгалтерия</span></div>
          <span>Счета, акты, сверки, выписки и полная финансовая картина вашей маркетинговой деятельности в удобном
            и функциональном отчете.</span>
        </div>
      </div>

      <div className="m-3 mt-10 text-center">
        <span className="text-2xl font-bold">Тарифы</span>
      </div>

      <div className="flex flex-no-wrap md:justify-center overflow-x-auto mt-10 mx-5">
        <div className="m-3 p-6 text-center shadow md:w-48">
          <span className="font-bold text-lg">1000</span>
          <div className="text-gray-600 w-48 md:w-auto">Работа в сервисе <br/>до 1 000 лидов в месяц</div>
          <hr className="w-20 my-5 mx-auto border border-gold"/>
          <span className="font-bold text-lg">от 10 ₽ <br/><small> в день</small></span>
          <div className="flex justify-center my-4">
            <Button classes="rounded bg-gold text-white text-1x p-1 focus:outline-none" text="Попробовать"/>
          </div>
          <span className="text-sm text-gray-600"> 14 дней бесплатно</span>
        </div>
        <div className="m-3 p-6 text-center shadow md:w-48">
          <span className="font-bold text-lg">2000</span>
          <div className="text-gray-600 w-48 md:w-auto">Работа в сервисе <br/>до 2 000 лидов в месяц</div>
          <hr className="w-10 my-5 mx-auto border border-gold"/>
          <span className="font-bold text-lg">от 20 ₽ <br/><small> в день</small></span>
          <div className="flex justify-center my-4">
            <Button classes="rounded bg-gold text-white text-1x p-1 focus:outline-none" text="Попробовать"/>
          </div>
          <span className="text-sm text-gray-600"> 14 дней бесплатно</span>
        </div>
        <div className="m-3 p-6 text-center shadow md:w-48">
          <span className="font-bold text-lg">3000</span>
          <div className="text-gray-600 w-48 md:w-auto">Работа в сервисе <br/>до 3 000 лидов в месяц</div>
          <hr className="w-10 my-5 mx-auto border border-gold"/>
          <span className="font-bold text-lg">от 30 ₽ <br/><small> в день</small></span>
          <div className="flex justify-center my-4">
            <Button classes="rounded bg-gold text-white text-1x p-1 focus:outline-none" text="Попробовать"/>
          </div>
          <span className="text-sm text-gray-600"> 14 дней бесплатно</span>
        </div>
        <div className="m-3 p-6 text-center shadow md:w-48">
          <span className="font-bold text-lg">4000</span>
          <div className="text-gray-600 w-48 md:w-auto">Работа в сервисе <br/>до 4 000 лидов в месяц</div>
          <hr className="w-10 my-5 mx-auto border border-gold"/>
          <span className="font-bold text-lg">от 40 ₽ <br/><small> в день</small></span>
          <div className="flex justify-center my-4">
            <Button classes="rounded bg-gold text-white text-1x p-1 focus:outline-none" text="Попробовать"/>
          </div>
          <span className="text-sm text-gray-600"> 14 дней бесплатно</span>
        </div>
      </div>

      <div className="mx-3 mt-10 text-center">
        <span className="text-2xl font-bold">Соберите свою платформу</span>
      </div>

      <div className="mx-3 text-center">
        <span className="text-sm sm:text-base text-gray-600">Собирите платформу из необходимых модулей, <br/>которые подходят конкретно под вашу деятельность</span>
      </div>


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