import Countdown from "react-countdown";

const CountdownTimer = ({ date, translations }) => {
  return (
    <Countdown
      date={date}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return (
            <div className="text-center text-primary mt-6 text-xl font-semibold">
              🎉 {translations.countdown.celebration}
            </div>
          );
        }

        return (
          <div className="text-center text-primary mt-8">
            <h3 className="text-xl font-semibold mb-4">
              📅 {translations.countdown.title}
            </h3>
            <div className="flex justify-center gap-8 text-3xl font-mono">
              <div>
                <div className="font-bold">{days}</div>
                <div className="text-sm text-secondary">
                  {translations.countdown.days}
                </div>
              </div>
              <div>
                <div className="font-bold">{hours}</div>
                <div className="text-sm text-secondary">
                  {translations.countdown.hours}
                </div>
              </div>
              <div>
                <div className="font-bold">{minutes}</div>
                <div className="text-sm text-secondary">
                  {translations.countdown.minutes}
                </div>
              </div>
              <div>
                <div className="font-bold">{seconds}</div>
                <div className="text-sm text-secondary">
                  {translations.countdown.seconds}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default CountdownTimer;
