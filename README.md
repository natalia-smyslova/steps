[![Build status](https://ci.appveyor.com/api/projects/status/mnsorxwvctj8j19e/branch/main?svg=true)](https://ci.appveyor.com/project/natalia-smyslova/steps/branch/main)

[![Netology AHJ](https://github.com/natalia-smyslova/steps/actions/workflows/web.yml/badge.svg)](https://github.com/natalia-smyslova/steps/actions/workflows/web.yml)

Учёт тренировок
===

Вы решили реализовать небольшое приложение, которое хранит данные о тренировках и прогулках, которые вы совершаете в течение недели.

Общий интерфейс должен выглядеть следующим образом:

![Steps](https://github.com/natalia-smyslova/ra16-homeworks/raw/master/forms/steps/assets/steps.png)

## Добавление данных

У вас должна быть форма ввода, в которую вводится дата и количество пройденных километров. Новые значения добавляются в таблицу при отправке формы.

_Особенности добавления_:
1. Новые значения добавляются не в конец, а согласно сортировке по дате, то есть если мы добавим 21.07.2019, то значение встанет на первую позицию, согласно скриншоту, а если 17.07.2019 — то на последнюю.
2. Если мы добавляем значения, указывая уже существующую дату, то значения суммируются с теми, что хранятся в таблице, например, если добавить 20.07.2019 и 10 км, то для даты 20.07.2019 будет отображаться 15.7 км.

## Удаление данных

С помощью иконки ✘ должна быть возможность удалить строку. Удаляется вся строка целиком и данные, связанные с ней.
