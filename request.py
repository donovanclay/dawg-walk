from dataclasses import dataclass

@dataclass(eq=True, frozen=True)
class Request:
    name: str
    destination: tuple[float, float]
    depart_time: str
