"use client";

import { NarrativeParagraph } from "./NarrativeParagraph";

const letterParagraphs = [
  "Hello loveee Happyyy hapyyyyy Anniversaryyy loveeeeeeeeeeeee etoo na yung dateee na inaatayy natinnn thenn we areee 3 yearsss naaaaa hihihih grabee ang bilis talagaaa ng panahonnn 3 yearss nayonnn hihihihihih.",
  "Ang masasabiii ku lang loveeeee ayyy superr loveee na loveee parin kitaa ikawww parinn ang loveeloveee koo babyyy kooooo asawaaa kuuu orrr anoo paaa bastaa ikaw at ikawww parin ang pinakaa mamahalll na loveeeloveee kooo nohh",
  "Kahit ano pa ang ikaww at ikaww parin ang pipiliin kuu ukahitt kailannnn  kayaaa wag ka mag iisppp ng bakaaa hindii na kitaa lvoeee kasii ikaww parinn pipiliin koo kahit anong mangyarriii kasii sa tinagal natin napatunayan nanatin sa isat isaaa na ikawwww talagaa ang pinakaa dabesttttt naaa loveelovee kooooo",
  "Kahit saang aspetoo ng girfried orr asawwaaa meronn kaaa lahatt lahattt kayaa ng katanigannn naa gustoo kuu kayaa ikaww pinakaa dabesttttt girlfrieddd apakaa swertteee ku kasii meronn meee na grabeee mag mahall at mag efforttt kayaaa yourrr areee superrsuperrr dabesttt tlagaaa loveeeeeeeeee",
  "kayaa loveee kahit anong mayariii lvoeeen naa loveeee kitaaaa sa loob ng 3 yearss napatunayann natrinn na kayaa natinn kayaaa letsss gowww to 4 yearsss and moree moreeee yearrss loeveeee kayaaa natinn toooo bastaa lagii muu tatandaan na sa pusoo kooo ikawww angg pianakaa lalamann netoo walaa kang kalaban dituu kasii ikaww lang talagaaaa too",
  "Kayaa loveeeeee mahall na mahall kitaa superrrrr love wag mo iisipin naaa hindii kitaa loveee kasii biggesttt wrongg yunn kasiii kahittt mag kaaway tayuu or tampuhann kung anuu mann loveee na loveee parin ang nangingibabawww sa kahitt anonggg switwasyonnn kayaa I loveee youuu so muchhh loveeeelovee koooo Happpuuu 3 yearsss Anniversaryyy loveeeloveeee kooooooooooooooooooo mwaaaaaaaaaaaa",
];

export function LetterSection() {
  return (
    <section className="mx-auto w-full max-w-3xl rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur sm:p-10">
      <header className="mb-8 text-center sm:mb-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#800020]/70">
        
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
          A Letter For You
        </h2>
      </header>

      <div className="space-y-6 sm:space-y-8">
        {letterParagraphs.map((paragraph, index) => (
          <NarrativeParagraph key={paragraph.slice(0, 40)} delay={index * 0.08}>
            {paragraph}
          </NarrativeParagraph>
        ))}
      </div>
    </section>
  );
}
