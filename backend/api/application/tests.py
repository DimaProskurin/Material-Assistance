from application.myParser import makeMonthGenitive


def testMakeMonthGenitive():
    assert makeMonthGenitive("январь") == "января", "test failed"
