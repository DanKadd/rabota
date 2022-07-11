import React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';

const Home = () => {
  const [services, setServices] = React.useState('');
  const [organization, SetOrganization] = React.useState('');
  const [natureWork, SetNatureWork] = React.useState('');
  const [samplePreparation, SetSamplePreparation] = React.useState('');
  const [useResults, SetUseResults] = React.useState('');
  const [requiredReferences, SetRequiredReferences] = React.useState('');

  return (
    <div className='home main'>
      <div className="container">
        <div className="home__inner">
          <div className="home__form-header">
            <FormControl className="home__form-input" variant="standard">
              <InputLabel id="labelServices">Услуги ЦКП</InputLabel>
              <Select
                labelId="labelServices"
                id="selectServices"
                value={services}
                onChange={(event) => setServices(event.target.value)}
              >
                <MenuItem value="">
                  <em>Не выбрано</em>
                </MenuItem>
                <MenuItem value={1}>Анализ сложных многокомпонентных смесей органических и неорганических соединений</MenuItem>
                <MenuItem value={2}>Измерения удельной поверхности и пористости дисперсных материалов</MenuItem>
                <MenuItem value={3}>Изучение микроструктуры поверхности и локального элементного анализа твердых объектов</MenuItem>
                <MenuItem value={4}>Исследование структуры поверхности объектов методами атомно-силовой и туннельной микроскопии</MenuItem>
              </Select>
            </FormControl>

            <FormControl className="home__form-input" variant="standard" >
              <InputLabel id="labelOrganization">Организация</InputLabel>
              <Select
                labelId="labelOrganization"
                id="selectOrganization"
                value={organization}
                onChange={(event) => SetOrganization(event.target.value)}
              >
                <MenuItem value="">
                  <em>Не выбрано</em>
                </MenuItem>
                <MenuItem value={1}>Аминокислотный анализатор Hitachi LA8080 (Hitachi, Япония) (Hitachi LA8080)</MenuItem>
                <MenuItem value={2}>Анализатор жидкости "Флюорат-02-Панорама" (Флюорат-02-Панорама)</MenuItem>
                <MenuItem value={3}>Аналитический комплекс на базе газового хроматомасс-спектрометра GCMS-QP2020 с функцией пиролиза (GCMS-QP2020)</MenuItem>
                <MenuItem value={4}>Вибрационный магнитометр VSM 8604 (VSM 8604 )</MenuItem>
                <MenuItem value={5}>Гематологический анализатор (DxH 500 )</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="home__form-content">
            <h3 className="home__form-title">ПОДРОБНОСТИ ЗАЯВКИ</h3>
            <div className="home__row">
              <TextField required id="inputPurpose" label="Цель работы" variant="standard"/>
              <TextField required id="inputNameProject" label="Наименование проекта" variant="standard"/>
              <TextField required id="inputCountDay" type="number" label="Предполагаемая продолжительность работ на оборудовании (дней)" variant="standard"/>
              <TextField required id="inputObject" label="Объект исследования (образец)" variant="standard"/>
              <TextField required id="inputMethod" label="Требуемый метод исследования" variant="standard"/>
              <TextField required id="inputCountSample" type="number" label="Количество образцов" variant="standard"/>
              <FormControl variant="standard">
                <InputLabel id="labelNatureWork">Характер работы</InputLabel>
                <Select
                  labelId="labelNatureWork"
                  id="selectNatureWork"
                  value={natureWork}
                  onChange={(event) => SetNatureWork(event.target.value)}
                >
                  <MenuItem value="">
                    <em>Не выбрано</em>
                  </MenuItem>
                  <MenuItem value={1}>Новая</MenuItem>
                  <MenuItem value={2}>Единовременная</MenuItem>
                  <MenuItem value={3}>Продолжение существующей</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel id="labelSamplePreparation">Специальная пробоподготовка образца</InputLabel>
                <Select
                  labelId="labelSamplePreparation"
                  id="selectSamplePreparation"
                  value={samplePreparation}
                  onChange={(event) => SetSamplePreparation(event.target.value)}
                >
                  <MenuItem value="">
                    <em>Не выбрано</em>
                  </MenuItem>
                  <MenuItem value={1}>Да</MenuItem>
                  <MenuItem value={2}>Нет</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel id="labelUseResults">Использование результатов в образовательном процессе</InputLabel>
                <Select
                  labelId="labelUseResults"
                  id="selectUseResults"
                  value={useResults}
                  onChange={(event) => SetUseResults(event.target.value)}
                >
                  <MenuItem value="">
                    <em>Не выбрано</em>
                  </MenuItem>
                  <MenuItem value={1}>Да</MenuItem>
                  <MenuItem value={2}>Нет</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel id="labelRequiredReferences">Обязательство ссылаться на ЦКП в публикации результата работы</InputLabel>
                <Select
                  labelId="labelRequiredReferences"
                  id="selectRequiredReferences"
                  value={requiredReferences}
                  onChange={(event) => SetRequiredReferences(event.target.value)}
                >
                  <MenuItem value="">
                    <em>Не выбрано</em>
                  </MenuItem>
                  <MenuItem value={1}>Да</MenuItem>
                  <MenuItem value={2}>Нет</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="home__dataProcessing-wrapper">
              <Checkbox id="dataProcessing" defaultChecked />
              <label for="dataProcessing" className="home__dataProcessing">Я даю согласие на обработку моих персональных данных в соответствии с Федеральным законом от 27.07.2006 №152-ФЗ "О персональных данных", на условиях и для целей, определенных в Согласии на обработку персональных данных</label>
            </div>
            <div className="home__send-wrapper">
              <Button className="home__send-btn" size="large" type="submit" variant="contained" endIcon={<SendIcon />}>Отправить</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;