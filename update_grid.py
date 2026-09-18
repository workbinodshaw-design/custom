import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the grid container
old_grid = '        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">'
new_grid = '        <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-3 lg:gap-5 pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 lg:pb-0" style={{ scrollbarWidth: \"none\" }}>'
content = content.replace(old_grid, new_grid)

# Replace the card container
old_card = '            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: i * 0.05, ease }} className="group cursor-pointer block relative w-full aspect-[3/4.2] rounded-[14px] lg:rounded-[18px] overflow-hidden shadow-sm">'
new_card = '            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: i * 0.05, ease }} className="group cursor-pointer block relative w-[70%] md:w-[45%] lg:w-full shrink-0 snap-center aspect-[3/4.5] lg:aspect-[3/4.2] rounded-[16px] lg:rounded-[18px] overflow-hidden shadow-sm">'
content = content.replace(old_card, new_card)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully.")
