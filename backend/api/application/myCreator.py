from xhtml2pdf import pisa
from datetime import datetime
from .myParser import adjustHtml
import os

module_dir = os.path.dirname(__file__)  # get current directory
monthsNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
               'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']


# Utility function
def convertHtmlToPdf(sourceHtml, outputFilename):
    # open output file for writing (truncated binary)
    resultFile = open(os.path.join(module_dir, outputFilename), "w+b")

    # convert HTML to PDF
    pisaStatus = pisa.CreatePDF(
            sourceHtml,                # the HTML to convert
            dest=resultFile)           # file handle to recieve result

    # close output file
    resultFile.close()                 # close output file

    # return True on success and False on errors
    return pisaStatus.err


def create(userId, fullName, group, compensationName, dormitoryBox, scholarBox, workBox, docsBox):
    # open file
    file = open(os.path.join(module_dir, 'data.html'))

    # Define your data
    sourceHtml = "".join(file.readlines())
    sourceHtml = sourceHtml.replace("insert_your_font_path", os.path.join(module_dir, 'TimesNewRoman.ttf'))
    outputFilename = "your_application_" + userId + ".pdf"

    pisa.showLogging()

    today = datetime.today()
    dayOfMonth = str(today.day)
    month = monthsNames[today.month - 1]
    year = str(today.year)

    profiledHtml = adjustHtml(sourceHtml,
                              fullName,
                              group,
                              compensationName,
                              dormitoryBox,
                              scholarBox,
                              workBox,
                              docsBox,
                              dayOfMonth,
                              month,
                              year)

    convertHtmlToPdf(profiledHtml, outputFilename)
