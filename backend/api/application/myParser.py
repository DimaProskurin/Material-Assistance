def makeMonthGenitive(month):
    if month == "январь":
        return "января"
    elif month == "февраль":
        return "февраля"
    elif month == "март":
        return "марта"
    elif month == "апрель":
        return "апреля"
    elif month == "май":
        return "мая"
    elif month == "июнь":
        return "июня"
    elif month == "июль":
        return "июля"
    elif month == "август":
        return "августа"
    elif month == "сентябрь":
        return "сентября"
    elif month == "октябрь":
        return "октября"
    elif month == "ноябрь":
        return "ноября"
    elif month == "декабрь":
        return "декабря"
    else:
        return "_________"


def adjustHtml(data,
               fullName,
               group,
               compensationName,
               dormitoryBox,
               scholarBox,
               workBox,
               docsBox,
               dayOfMonth,
               month,
               year):
    data = data.replace("insert_your_full_name_here", fullName)
    data = data.replace("insert_your_group_here", group)
    data = data.replace("&#9633 " + compensationName, "&#9632 " + compensationName)

    if dormitoryBox:
        data = data.replace("&#9633 Проживаю в общежитии", "&#9632; Проживаю в общежитии")

    if scholarBox:
        data = data.replace("&#9633 Не имею стипендии", "&#9632 Не имею стипендии")

    if workBox:
        data = data.replace("&#9633 Не работаю", "&#9632 Не работаю")

    if docsBox:
        data = data.replace("&#9633 Прилагаю документы", "&#9632 Прилагаю документы")

    data = data.replace("insert_your_day_here", dayOfMonth)
    data = data.replace("insert_your_month_here", makeMonthGenitive(month))
    data = data.replace("insert_your_part_year_here", year[2] + year[3])

    return data
