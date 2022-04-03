import Question from "@/components/features/zone/Question";

const Questions = () => {
  const items = [
    {
      question:
        "Moje dziecko nie je samodzielnie. Czy opiekunowie karmią dzieci?",
      answer:
        "Absolutnie żaden. Każde dziecko rozwija się w swoim tempie, nie wszystkie dzieci uczęszczające do żłobka już chodzą. A nawet jeśli to często są to ich pierwsze podróże w pozycji pionowej i przeważnie są one dość niepewne. Dzieci takie swobodnie przemieszczają się po sali w sposób jaki jest dla nich najwygodniejszy. Opiekunowie podczas karmienia, mycia rąk, wyjścia na dwór biorą takie dzieci po prostu na ręce. Jak w domu. Na spacery wychodzimy w wózku, lub gdy jest ciepło rozkładamy kocyki na trawie i maluch może swobodnie eksplorować przestrzeń.",
    },
    {
      question: "Moje dziecko jeszcze nie chodzi. Czy to problem?",
      answer:
        "Absolutnie żaden. Każde dziecko rozwija się w swoim tempie, nie wszystkie dzieci uczęszczające do żłobka już chodzą. A nawet jeśli to często są to ich pierwsze podróże w pozycji pionowej i przeważnie są one dość niepewne. Dzieci takie swobodnie przemieszczają się po sali w sposób jaki jest dla nich najwygodniejszy. Opiekunowie podczas karmienia, mycia rąk, wyjścia na dwór biorą takie dzieci po prostu na ręce. Jak w domu. Na spacery wychodzimy w wózku, lub gdy jest ciepło rozkładamy kocyki na trawie i maluch może swobodnie eksplorować przestrzeń.",
    },
    {
      question: "Co robią opiekunowie jak dziecko się uderzy?",
      answer:
        "Absolutnie żaden. Każde dziecko rozwija się w swoim tempie, nie wszystkie dzieci uczęszczające do żłobka już chodzą. A nawet jeśli to często są to ich pierwsze podróże w pozycji pionowej i przeważnie są one dość niepewne. Dzieci takie swobodnie przemieszczają się po sali w sposób jaki jest dla nich najwygodniejszy. Opiekunowie podczas karmienia, mycia rąk, wyjścia na dwór biorą takie dzieci po prostu na ręce. Jak w domu. Na spacery wychodzimy w wózku, lub gdy jest ciepło rozkładamy kocyki na trawie i maluch może swobodnie eksplorować przestrzeń.",
    },
    {
      question: "Czy dziecko może odbierać babcia?",
      answer:
        "Absolutnie żaden. Każde dziecko rozwija się w swoim tempie, nie wszystkie dzieci uczęszczające do żłobka już chodzą. A nawet jeśli to często są to ich pierwsze podróże w pozycji pionowej i przeważnie są one dość niepewne. Dzieci takie swobodnie przemieszczają się po sali w sposób jaki jest dla nich najwygodniejszy. Opiekunowie podczas karmienia, mycia rąk, wyjścia na dwór biorą takie dzieci po prostu na ręce. Jak w domu. Na spacery wychodzimy w wózku, lub gdy jest ciepło rozkładamy kocyki na trawie i maluch może swobodnie eksplorować przestrzeń.",
    },
  ];
  return (
    <div className="flex justify-center py-16 lg:pt-[120px] lg:pb-[84px] px-5" id="questions">
      <div className="flex flex-col items-center w-full max-w-[950px]">
        <p className="font-bold text-[27px] lg:text-4xl text-center text-[#463F3A] mb-12">
          Często zadawane pytania
        </p>
        <div className="w-full">
          {items.map((item, index) => (
            <div key={index} className="mb-3">
              <Question {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
