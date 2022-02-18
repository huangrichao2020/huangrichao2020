import turtle as t

pensize = 50
t.screensize(400, 300, "#66ccff")
a = t.window_width()
b = t.window_height()

t.pensize(pensize)
t.pencolor("#FF0000")
t.penup()
t.speed(10)
t.write('hello',move=False,align='center',font=('',72,'normal'))

