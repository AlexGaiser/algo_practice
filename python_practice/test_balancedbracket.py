from python_practice.balancedbrackets import balancedbrackets

class TestClass(object):
    def test_balancedbrackets1(self):
        assert balancedbrackets("())") == 1
    def test_balancedbrackets3(self):
        assert balancedbrackets("(((") == 3
    def test_balancedbrackets0(self):
        assert balancedbrackets("()") == 0
    def test_balancedbrackets4(self):
        assert balancedbrackets("()))((") == 4
    def test_balancedbrackets2(self):
        assert balancedbrackets("((()()") == 2
    

