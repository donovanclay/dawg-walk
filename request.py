from dataclasses import dataclass

@dataclass(eq=True, frozen=True)
class Request:

    # FIELDS
    #
    # name:
    # destination:
    # arrival_time:
    # depart_time:
    name: str
    destination: tuple[float, float]
    depart_time: str