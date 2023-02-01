L = open('quote.txt', 'r', encoding="utf-8")
 
# Writing to a file
file1 = open('myfile.txt', 'w')
file1.writelines((L))
file1.close()
 
# Using readline()
file1 = open('myfile.txt', 'r')
count = 0
 
while True:
    count += 1
 
    # Get next line from file
    line = file1.readline()
 
    # if line is empty
    # end of file is reached
    if not line:
        break
    print("{\"text\":\"" + line.strip() + "\"},")
 
file1.close()